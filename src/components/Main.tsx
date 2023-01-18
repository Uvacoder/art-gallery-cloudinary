import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import styled from "styled-components";
import Upload from "./Upload";
import type { Props } from "../utils/Props";

export default function Main({
  popup,
  setPopup,
  gallery,
  setGallery,
}: Props & { popup: boolean }) {
  const cld: Cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dt7yjhfbb",
    },
  });

  return (
    <StyledMain>
      {popup && (
        <Upload setGallery={setGallery} setPopup={setPopup} gallery={gallery} />
      )}
      <StyledGallery popup={popup}>
        {gallery.map(({ public_id }) => (
          <StyledWrapper key={public_id}>
            <StyledImage cldImg={cld.image(public_id)} />
          </StyledWrapper>
        ))}
      </StyledGallery>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 30px 0;
`;

const StyledGallery = styled.div<{ popup: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 15px;
  filter: ${(props) => props.popup && "blur(10px)"};
  transition: filter 0.4s;
`;

const StyledWrapper = styled.div`
  border: 5px solid black;
  width: 400px;
  height: 400px;
  background-color: black;
  box-shadow: 6px 6px 2px 1px rgba(19, 19, 20);
`;

const StyledImage = styled(AdvancedImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #1a1818;
`;
