const InfoTooltip = ({ isOpen, onClose }) => {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className={`popup__container`}>
        <button
          type="button"
          className="popup__close-button popup__close-button_profile"
          aria-label="Close button"
          onClick={onClose}
        />
        <div className="popup__success"></div>
        <p>Success! You have now been registered.</p>
        <div className="popup__error"></div>
        <p>Oops, something went wrong! Please try again.</p>
      </div>
    </section>
  );
};

export default InfoTooltip;
