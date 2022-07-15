import React from "react";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { IZoomViewProps } from "../../../interfaces";

const ZoomView = ({ images, isVisible, onClose }: IZoomViewProps) => {
    const imageUrls = images?.map((item) => ({
        url: item,
        height: 250,
    }));

    return (
        <Modal visible={isVisible} transparent={true}>
            {imageUrls && (
                <ImageViewer onClick={onClose} imageUrls={imageUrls} />
            )}
        </Modal>
    );
};

export default ZoomView;
