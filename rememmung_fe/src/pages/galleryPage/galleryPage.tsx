import React, { useEffect, useState } from "react";

import PhotoContainer from "@components/galleryPage/photoContainer/photoContainer";
import Pagination from "@components/common/pagination/pagination";

import styles from "./styles";
import { getPetFile } from "@server/content/api/pet_attachment";
import { PhotoDataProps } from "type/galleryPage/galleryPage";

const GalleryPage: React.FC = () => {
  // @ts-ignore
  const [photoData, setPhotoData] = useState<PhotoDataProps>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 10;

  // @ts-ignore
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(photoData.totalCount / pageSize)
  );

  const handlePage = (num: number) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    getPetFile(currentPage, pageSize).then((res) => setPhotoData(res));
  }, [photoData, currentPage]);

  return (
    <styles.Container>
      <styles.WhiteBox>
        <PhotoContainer photoData={photoData.nodes} />
        {photoData && photoData.totalCount > 0 ? (
          <Pagination
            currentPage={currentPage}
            handlePage={handlePage}
            totalPage={totalPage}
          />
        ) : null}
      </styles.WhiteBox>
    </styles.Container>
  );
};

export default GalleryPage;
