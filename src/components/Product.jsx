
export const Product = ({ name, imgUrl, price }) => {
  const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};
  return (
    <div>
      <h2 style={alertStyles}>{name}</h2>
			<img src={imgUrl} alt={name} />
			<p style={alertStyles}>Price: {price} credits</p>
    </div>
  );
};