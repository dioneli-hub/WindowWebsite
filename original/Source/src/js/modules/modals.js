const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add("modal-open");
            });
        });

        close.addEventListener("click", ()=> {
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove("modal-open");
        });

        modal.addEventListener("click", (e)=> {
            if (e.target === modal){
                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove("modal-open");
            }
        });
    }
    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
};

export default modals;