//react-bootstrap modal을 이용한 유튜브 팝업

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";

const Trailer = ({ item }) => {
    const [show, setShow] = useState(false);

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const typeTrailer = item.results?.find((aa) => {
        if (aa.type === "Trailer") {
            return item;
        }
    });
    console.log("video item?", item);

    return (
        <div id="trailer">
            <p className="playButton" onClick={() => setShow(true)}>
                예고편 🎬
            </p>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <p>
                        {/* videoId={item.results[0].key} : 첫번째 유튜브, type이 Trailer인 것 */}
                        <YouTube
                            videoId={typeTrailer?.key || item.results[0].key}
                            opts={opts}
                            onReady={onPlayerReady}
                        />
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Trailer;
