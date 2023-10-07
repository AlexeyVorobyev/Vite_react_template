import styles from "./style.module.scss";
import React from "react";

// onClick={() => {
//     setDeletePopupHandler({
//         callback:async () => {
//             await deleteDiagram({id:data.id});
//             if (diagrams.dataBase.length === 1) {
//                 diagramsSetDataBasePage({dataBasePage:1});
//             }
//             setIsRenderDeletePopup(false);
//             document.body.style.overflowY = "visible";
//         },
//         caption:"Are you sure to delete schedule?"
//     })
//     setIsRenderDeletePopup(true);
//     document.body.style.overflowY = "hidden";
// }}

interface Props {
    handler:any,
    setIsRenderDeletePopup:Function
}
const AeroDeletePopup:React.FC<Props> = ({handler, setIsRenderDeletePopup}) => {
    return (
        <div className={styles.deletePopupWrapper}>
            <div className={styles.deletePopup}>
                <p className={styles.paragraph}>{handler.caption}</p>
                <div className={styles.buttonsWrapper}>
                    <div
                        className={styles.deletePopupButton}
                        onClick={() => {
                            setIsRenderDeletePopup(false);
                            document.body.style.overflowY = "visible";
                        }}
                    >
                        <p className={styles.deletePopupButtonText}>Cancel</p>
                    </div>
                    <div
                        className={styles.deletePopupButton}
                        onClick={handler.callback}
                    >
                        <p className={styles.deletePopupButtonText}>Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {AeroDeletePopup}