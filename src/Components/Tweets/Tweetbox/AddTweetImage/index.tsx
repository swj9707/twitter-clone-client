import { ImageObj } from "@/Store/Type/Tweet/Tweet";
import { FC, memo, ReactElement } from "react";
import { CancelIcon, ImageContainer, ImageContent } from "./styles";

interface AddTweetImageProps {
  images: ImageObj[];
  removeImage: (src: string) => void;
}

const AddTweetImage: FC<AddTweetImageProps> = memo(
  ({ images, removeImage }): ReactElement | null => {
    return (
      <ImageContainer>
        {images.map((image) => {
          return (
            <ImageContent key={image.src}>
              <CancelIcon
                key={image.src}
                onClick={() => removeImage(image.src)}
                style={{ position: "absolute", top: "6%", left: "-12%" }}
              />
              <img src={image.src} alt={image.src}></img>
            </ImageContent>
          );
        })}
      </ImageContainer>
    );
  }
);

export default AddTweetImage;
