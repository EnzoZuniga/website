// import cx from "classnames";
// import { MiniSignalBinding } from "mini-signals";
import React, { useEffect, useRef, useState } from "react";
// import useForm from "react-hook-form";
// import { isEmail, ReactMultiEmail } from "react-multi-email";
// import { sendDataToApi } from "../helpers/client";
// import { eventDispatcher } from "../helpers/eventDispatcher";

interface Props {
  open: boolean;
}

// interface IMultiEmail {
//   [emails: string]: string;
// }

export const ShareModalOpen = "share:modale:open";
export const ShareModalClose = "share:modale:close";

const Header: React.FC<Props> = ({ open = false }) => {
  // const ModalOpenRef = useRef<MiniSignalBinding>();
  // const ModalCloseRef = useRef<MiniSignalBinding>();
  // const [shareEmails, setShareEmails] = useState<string[]>([]);
  // const [openModal, setOpenModal] = useState<boolean>(open);
  // const [successState, setSuccessState] = useState<boolean>(false);
  // const { handleSubmit, register } = useForm<IMultiEmail>();

  // const showModal = () => {
  //   setOpenModal(true);
  // };
  // const hideModal = () => {
  //   setOpenModal(false);
  // };

  // useEffect(() => {
  //   ModalOpenRef.current = eventDispatcher.on(ShareModalOpen, showModal);
  //   ModalCloseRef.current = eventDispatcher.on(ShareModalClose, hideModal);

  //   return (): void => {
  //     if (ModalOpenRef.current) {
  //       eventDispatcher.off(ShareModalOpen, ModalOpenRef.current);
  //     }
  //     if (ModalCloseRef.current) {
  //       eventDispatcher.off(ShareModalClose, ModalCloseRef.current);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   setOpenModal(open);
  // }, [open]);

  // const onClickModalTrigger = (openState: boolean) => {
  //   setOpenModal(openState);
  // };

  // const onSubmitSharingForm = (values: IMultiEmail) => {
  //   const emailsArr = values.emails.split(",");
  //   if (emailsArr[0].length > 0) {
  //     emailsArr.forEach((el: string) => {
  //       if (el.length) {
  //         sendDataToApi({
  //           email: el,
  //           firstname: "",
  //           lastname: "",
  //           type: "partage",
  //           operation: "fifty_startups_2021",
  //         });
  //       }
  //     });
  //     showSuccessState();
  //   }
  // };

  // const showSuccessState = () => {
  //   setSuccessState(true);
  // };

  return (
    <header>
      <div className="header-content">
        {/* <div className="share-site-cta-container">
          <button
            onClick={() => {
              onClickModalTrigger(!openModal);
            }}
            className="share-cta"
          >
            Partager
          </button>
        </div> */}
      </div>
      {/* <div className={cx("modal-container", { open: openModal })}>
        <div className="modal">
          <span
            className="close"
            onClick={() => onClickModalTrigger(false)}
          ></span>
          <span className="modal-title">Partager</span>
          <p className="text modal-text">
            Pour partager ce contenu à vos proches, rien de plus simple.
            Indiquez leurs emails et cliquez sur partager. On s'occupe du reste
            :
          </p>
          <form
            className="sharing-form"
            onSubmit={handleSubmit(onSubmitSharingForm)}
          >
            <input
              type="hidden"
              name="emails"
              ref={register}
              value={shareEmails}
            />
            <ReactMultiEmail
              placeholder="Ajoutez les emails de vos amis"
              emails={shareEmails}
              ref={register}
              onChange={(_emails: string[]) => {
                setShareEmails(_emails);
              }}
              validateEmail={email => {
                return isEmail(email);
              }}
              getLabel={(
                email: string,
                index: number,
                removeEmail: (index: number) => void,
              ) => {
                return (
                  <div data-tag key={index}>
                    {email}
                    <span data-tag-handle onClick={() => removeEmail(index)}>
                      ×
                    </span>
                  </div>
                );
              }}
            />
            <div className="share-submit-container">
              <button
                disabled={successState}
                className={cx("btn btn-primary email-share-btn", {
                  success: successState,
                })}
              >
                <span className="share-wording">Partager</span>
                <span className="success-wording">C'est bon !</span>
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
