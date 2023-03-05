import { ImageObj } from "@/Data/Type/Tweet/Tweet";
import { FC, memo, ReactElement, useCallback, useEffect, useRef } from "react";
import {
  UploadImageFileIcon,
  UploadImageInputButton,
} from "@/Styles/components/Tweet/style";

interface UploadImageProps {
  imageCount: number;
  onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

const MAX_IMAGE = 1;

const UploadImages: FC<UploadImageProps> = memo(
  ({ imageCount, onChangeImages }): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickImage = () => {
      if (inputRef.current) {
        if (imageCount < MAX_IMAGE) {
          inputRef.current.click();
        } else {
          alert("최대 업로드 가능한 파일 갯수를 초과하였습니다.");
        }
      }
    };

    const handleChangeFileInput = useCallback((event: Event): void => {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
          const fileObj = new Blob([file]);
          onChangeImages((prev) => [
            {
              src: URL.createObjectURL(fileObj),
              file,
            },
            ...prev,
          ]);
        }
      }
    }, []);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.addEventListener("change", handleChangeFileInput);
      }
      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("change", handleChangeFileInput);
        }
      };
    }, []);

    return (
      <>
        <UploadImageInputButton>
          <UploadImageFileIcon onClick={handleClickImage} />
        </UploadImageInputButton>
        <input ref={inputRef} type="file" id="upload-input" hidden />
      </>
    );
  }
);

export default UploadImages;
