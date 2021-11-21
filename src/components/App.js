import { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import Register from "./Register";
import Login from "./Login";
import * as auth from "../utils/auth";
import api from "../utils/api";
import avatar from "../images/avatar.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  // Context for Current User
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: avatar,
  });

  const [cards, setCards] = useState([]);

  // Popup States
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] =
    useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  const [isPreviewImagePopupOpen, setIsPreviewImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleConfirmDeleteClick = () => setIsConfirmDeletePopupOpen(true);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setIsPreviewImagePopupOpen(false);
    setInfoTooltipOpen(false);
  };

  // Image preview
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPreviewImagePopupOpen(true);
  };

  // Authentication and Authorization
  const [loggedIn, setLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    handleTokenCheck();
  }, []);

  // if the user has a token in localStorage,
  // this function will check that the user has a valid token
  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res.status === 200) {
            setLoggedIn(true);
            setUserEmail(res.data.email);
            history.push("/profile");
          }
        })
        .catch((err) => console.error(err));
    } else {
      setLoggedIn(false);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  // load the project with cards and user information
  useEffect(() => {
    api
      .getAppInfo()
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  // API CALLS
  const handleCardLike = (card) => {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((e) => console.error(e));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .setUserInfo({ name, about })
      .then((userData) => {
        setCurrentUser({ name, about, ...userData });
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setUserAvatar(avatar)
      .then((userData) => {
        setCurrentUser({ avatar, ...userData });
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addCard({ name, link })
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header handleLogout={handleLogout} userEmail={userEmail} />
      <Switch>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Main}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onConfirmDeleteClick={handleConfirmDeleteClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/signup" />}
        </Route>
      </Switch>

      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <PopupWithForm
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        name="confirm"
        title="Are you sure?"
        buttonText="Yes"
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isPreviewImagePopupOpen}
        name="preview"
      />

      <PopupWithForm
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        name="confirm"
        title="Are you sure?"
        buttonText="Yes"
      />
      {/* <Footer /> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
