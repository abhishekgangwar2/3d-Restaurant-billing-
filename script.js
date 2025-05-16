const menuItems = [
  { name: "Lassi", price: 170, image: "https://via.placeholder.com/180?text=Lassi" },
  { name: "Chili Paneer", price: 153, image: "https://via.placeholder.com/180?text=Chili+Paneer" },
  { name: "Shawarma", price: 74, image: "https://via.placeholder.com/180?text=Shawarma" },
  { name: "Burger", price: 250, image: "https://via.placeholder.com/180?text=Burger" },
  { name: "French Toast", price: 78, image: "https://via.placeholder.com/180?text=French+Toast" },
  { name: "Veg Roll", price: 219, image: "https://via.placeholder.com/180?text=Veg+Roll" },
  { name: "Gulab Jamun", price: 237, image: "https://via.placeholder.com/180?text=Gulab+Jamun" },
  { name: "Cutlet", price: 148, image: "https://via.placeholder.com/180?text=Cutlet" },
  { name: "Tandoori Chicken", price: 113, image: "https://via.placeholder.com/180?text=Tandoori+Chicken" },
  { name: "Tikka Masala", price: 197, image: "https://via.placeholder.com/180?text=Tikka+Masala" },
  { name: "Kathi Roll", price: 245, image: "https://via.placeholder.com/180?text=Kathi+Roll" },
  { name: "Donut", price: 156, image: "https://via.placeholder.com/180?text=Donut" },
  { name: "Hot Dog", price: 213, image: "https://via.placeholder.com/180?text=Hot+Dog" },
  { name: "Pasta", price: 228, image: "https://via.placeholder.com/180?text=Pasta" },
  { name: "Rasgulla", price: 117, image: "https://via.placeholder.com/180?text=Rasgulla" },
  { name: "Chole Bhature", price: 180, image: "https://via.placeholder.com/180?text=Chole+Bhature" },
  { name: "Cold Coffee", price: 45, image: "https://via.placeholder.com/180?text=Cold+Coffee" },
  { name: "Soup", price: 152, image: "https://via.placeholder.com/180?text=Soup" },
  { name: "Pizza", price: 207, image: "https://via.placeholder.com/180?text=Pizza" },
  { name: "Spring Roll", price: 102, image: "https://via.placeholder.com/180?text=Spring+Roll" },
  { name: "Paneer Tikka", price: 175, image: "https://via.placeholder.com/180?text=Paneer+Tikka" },
  { name: "Samosa", price: 91, image: "https://via.placeholder.com/180?text=Samosa" },
  { name: "Wrap", price: 89, image: "https://via.placeholder.com/180?text=Wrap" },
  { name: "Milkshake", price: 208, image: "https://via.placeholder.com/180?text=Milkshake" },
  { name: "Bread Pakora", price: 55, image: "https://via.placeholder.com/180?text=Bread+Pakora" },
  { name: "Cheese Balls", price: 179, image: "https://via.placeholder.com/180?text=Cheese+Balls" },
  { name: "Omelette", price: 72, image: "https://via.placeholder.com/180?text=Omelette" },
  { name: "Pav Sandwich", price: 132, image: "https://via.placeholder.com/180?text=Pav+Sandwich" },
  { name: "Momos", price: 99, image: "https://via.placeholder.com/180?text=Momos" },
  { name: "Ice Cream", price: 82, image: "https://via.placeholder.com/180?text=Ice+Cream" },
  { name: "Pizza Puff", price: 110, image: "https://via.placeholder.com/180?text=Pizza+Puff" },
  { name: "Vada Pav", price: 68, image: "https://via.placeholder.com/180?text=Vada+Pav" },
  { name: "Sandwich", price: 122, image: "https://via.placeholder.com/180?text=Sandwich" },
  { name: "Falooda", price: 163, image: "https://via.placeholder.com/180?text=Falooda" },
  { name: "Biryani", price: 232, image: "https://via.placeholder.com/180?text=Biryani" },
  { name: "Coke", price: 49, image: "https://via.placeholder.com/180?text=Coke" },
  { name: "Garlic Bread", price: 125, image: "https://via.placeholder.com/180?text=Garlic+Bread" },
  { name: "Salad", price: 106, image: "https://via.placeholder.com/180?text=Salad" },
  { name: "Chai", price: 50, image: "https://via.placeholder.com/180?text=Chai" },
  { name: "Idli", price: 77, image: "https://via.placeholder.com/180?text=Idli" },
  { name: "Noodles", price: 146, image: "https://via.placeholder.com/180?text=Noodles" },
  { name: "Fries", price: 84, image: "https://via.placeholder.com/180?text=Fries" },
  { name: "Chicken Wings", price: 188, image: "https://via.placeholder.com/180?text=Chicken+Wings" },
  { name: "Veg Biryani", price: 214, image: "https://via.placeholder.com/180?text=Veg+Biryani" },
  { name: "Dosa", price: 98, image: "https://via.placeholder.com/180?text=Dosa" },
  { name: "Thali", price: 220, image: "https://via.placeholder.com/180?text=Thali" },
  { name: "Manchurian", price: 196, image: "https://via.placeholder.com/180?text=Manchurian" },
  { name: "Kachori", price: 64, image: "https://via.placeholder.com/180?text=Kachori" }
];

const menuContainer = document.getElementById("menuContainer");
const billItems = document.getElementById("billItems");
const totalAmount = document.getElementById("totalAmount");
const currentDate = document.getElementById("currentDate");

currentDate.textContent = new Date().toLocaleDateString();

let total = 0;

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h4>${item.name}</h4>
    <p>₹${item.price}</p>
  `;
  div.onclick = () => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    billItems.appendChild(li);
    total += item.price;
    totalAmount.textContent = total;
  };
  menuContainer.appendChild(div);
});

function printBill() {
  const buyer = document.getElementById("customerName").value || "Unknown";
  const billContent = `
    <h2>Restaurant Bill</h2>
    <p><strong>Buyer:</strong> ${buyer}</p>
    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
    <ul>${billItems.innerHTML}</ul>
    <h3>Total: ₹${total}</h3>
  `;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(billContent);
  printWindow.document.close();
  printWindow.print();
}
