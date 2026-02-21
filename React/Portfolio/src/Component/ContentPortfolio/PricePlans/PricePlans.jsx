import "./PricePlans.css";
import PricingCard from "./PricingCard";

const pricingCard = [
  {
    id: 1,
    disPlayBadge: false,
    title: "Silver",
    price: 0,
    content: "For most businesses that want to optimize web queries",
  },
  {
    id: 2,
    disPlayBadge: true,
    title: "Gold",
    price: 50,
    content: "For most businesses that want to optimize web queries",
  },
  {
    id: 3,
    disPlayBadge: false,
    title: "Dimond",
    price: 80,
    content: "For most businesses that want to optimize web queries",
  },
];

const PricePlans = () => {
  return (
    <div className="price-plans-container">
      <div className="price-plans-container-content">
        <h2 className="price-plans-container-content-title">Price plans</h2>
        <p className="price-plans-container-content-para">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="price-plans-container-value">
        {pricingCard.map((items) => {
          return (
            <PricingCard
              key={items.id}
              badge={items.disPlayBadge}
              title={items.title}
              price={items.price}
              content={items.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PricePlans;
