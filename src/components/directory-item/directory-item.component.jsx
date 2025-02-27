import "./directory-item.styles.scss"

const DirectoryItem = ({ category }) => {
    const { title, imageUrl }= category;

    return(
        <div className="directory-item-container">
          <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default DirectoryItem;




// import {
//   BackgroundImage,
//   Body,
//   DirectoryItemContainer,
// } from './directory-item.styles';

// const DirectoryItem = ({ category }) => {
//   const { imageUrl, title } = category;
//   return (
//     <DirectoryItemContainer>
//       <BackgroundImage imageUrl={imageUrl} />
//       <Body>
//         <h2>{title}</h2>
//         <p>Shop Now</p>
//       </Body>
//     </DirectoryItemContainer>
//   );
// };

// export default DirectoryItem;