const menuItems = [{
     itemCode: "B1001", itemName: "Classic Burger (Large)", price: 750.00, discount: 0, img: "https://images.pexels.com/photos/5554607/pexels-photo-5554607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ itemCode: "B1002", itemName: "Classic Burger (Regular)", price: 1500.00, discount: 15, img: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1003", itemName: "Turkey Burger", price: 1600.00, discount: 0, img: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1004", itemName: "Chicken Burger (Large)", price: 1400.00, discount: 0, img: "https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-cheeseburger-with-french-fries-and-three-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1005", itemName: "Chicken Burger (Regular)", price: 800.00, discount: 20, img: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { itemCode: "B1006", itemName: "Cheese Burger (Large)", price: 1000.00, discount: 0, img: "https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1007", itemName: "Cheese Burger (Regular)", price: 600.00, discount: 0, img: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1008", itemName: "Bacon Burger", price: 650.00, discount: 15, img: "https://images.pexels.com/photos/15146310/pexels-photo-15146310/free-photo-of-burgere-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1009", itemName: "Shawarma Burger", price: 800.00, discount: 0, img: "https://images.pexels.com/photos/18188571/pexels-photo-18188571/free-photo-of-burger-and-a-shawarma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1010", itemName: "Olive Burger", price: 1800.00, discount: 0, img: "https://images.pexels.com/photos/11401287/pexels-photo-11401287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1012", itemName: "Double-Cheese Burger", price: 1250.00, discount: 20, img: "https://images.pexels.com/photos/10922927/pexels-photo-10922927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1013", itemName: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0, img: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1014", itemName: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10, img: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1015", itemName: "Paneer Burger", price: 900.00, discount: 0, img: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

  
  { itemCode: "B1016", itemName: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: 0,img:"https://images.pexels.com/photos/7595072/pexels-photo-7595072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { itemCode: "B1017", itemName: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: 0,img:"https://images.pexels.com/photos/7595073/pexels-photo-7595073.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { itemCode: "B1018", itemName: "Chicken Submarine (Large)", price: 1800.00, discount: 3,img:"https://media.istockphoto.com/id/2149693429/photo/sandwich-one-fresh-big-submarine-sandwich-with-ham-cheese-lettuce-tomatoes-and-microgreens-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=itGnQ8ll2i7tS0Alef39zqyd1krP72RdtIqcONPm-QU=" },
  { itemCode: "B1019", itemName: "Chicken Submarine (Regular)", price: 1400.00, discount: 0,img:"https://media.istockphoto.com/id/157718121/photo/foot-long-ham-and-swiss-cheese-sub.webp?a=1&b=1&s=612x612&w=0&k=20&c=3HuT3jrMfztas9I4e7T1wS7n-iIaPdapn3I9A5ZoT_g=" },
  { itemCode: "B1020", itemName: "Grinder Submarine", price: 2300.00, discount: 0,img:"https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501__FillWzExNzAsNTgzXQ.jpg" },
  { itemCode: "B1021", itemName: "Cheese Submarine", price: 2200.00, discount: 0 ,img:"https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine", price: 1900.00, discount: 16,img:"https://www.foodrepublic.com/img/gallery/tiktoks-viral-grinder-sandwich-is-basically-a-better-salad/intro-1694677635.jpg" },
  { itemCode: "B1023", itemName: "Special Horgie Submarine", price: 2800.00, discount: 0 ,img:"https://i.shgcdn.com/2bbb0953-8b9f-4a81-b717-1d7cb1644e55/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
  { itemCode: "B1024", itemName: "MOS Special Submarine", price: 3000.00, discount: 0,img:"https://images.pexels.com/photos/20867465/pexels-photo-20867465/free-photo-of-sandwich-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600" },

  // Fries
  { itemCode: "B1025", itemName: "Steak Fries (Large)", price: 1200.00, discount: 0 ,img:"https://www.paintthekitchenred.com/wp-content/uploads/2022/03/Air-fryer-frozen-steak-fries-L1-Paint-the-Kitchen-Red-scaled.jpg"},
  { itemCode: "B1026", itemName: "Steak Fries (Medium)", price: 600.00, discount: 0 ,img:"https://www.pinkwhen.com/wp-content/uploads/2023/05/Red-Robin-Frozen-Steak-Fries-in-Air-Fryer-1-500x375.jpg"},
  { itemCode: "B1027", itemName: "French Fries (Large)", price: 800.00, discount: 0 ,img:"https://recipes.net/wp-content/uploads/2023/05/johnnys-bacon-cheese-fries-recipe_8536f8fd0bcf26e94e04352e8d2b48ba.jpeg"},
  { itemCode: "B1028", itemName: "French Fries (Medium)", price: 650.00, discount: 0 ,img:"https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg"},
  { itemCode: "B1029", itemName: "French Fries (Small)", price: 450.00, discount: 0 ,img:"https://www.indianveggiedelight.com/wp-content/uploads/2019/07/air-fryer-potato-fries-featured.jpg"},
  { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)", price: 600.00, discount: 0 ,img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Baked-Sweet-Potato-Fries-Recipe.jpg"},

  // Pasta
  { itemCode: "B1031", itemName: "Chicken Cheese Pasta", price: 1600.00, discount: 15,img:"https://saltedmint.com/wp-content/uploads/2018/05/Creamy-tuscan-tomato-pasta-2.jpg" },
  { itemCode: "B1032", itemName: "Chicken Penne Pasta", price: 1700.00, discount: 0,img:"https://www.vincenzosplate.com/wp-content/uploads/2021/08/610x350-Photo-4_862-How-to-Make-CHICKEN-PASTA-Like-an-Italian-V1.jpg"  },
  { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake", price: 2900.00, discount: 10,img:"https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg"  },
  { itemCode: "B1034", itemName: "Creamy Shrimp Pasta", price: 2000.00, discount: 0,img:"https://www.sipandfeast.com/wp-content/uploads/2023/01/spicy-creamy-mushroom-pasta-snippet.jpg"  },
  { itemCode: "B1035", itemName: "Lemon Butter Pasta", price: 1950.00, discount: 0,img:"https://shortgirltallorder.com/wp-content/uploads/2021/07/lemon-butter-pasta-square.jpg"  },
  { itemCode: "B1036", itemName: "Tagliatelle Pasta", price: 2400.00, discount: 1,img:"https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749"  },
  { itemCode: "B1037", itemName: "Baked Ravioli", price: 2000.00, discount: 1 ,img:"https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2022/06/pasta-primavera-1.jpg" },

  // Chicken
  { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: 1200.00, discount: 0,img:"https://christieathome.com/wp-content/uploads/2020/10/Facetune_06-10-2020-15-37-58-scaled.jpg" },
{ itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: 2300.00, discount: 10,img:"https://www.therusticelk.com/wp-content/uploads/2018/09/Southern-fried-chicken-2.jpg" },
{ itemCode: "B1040", itemName: "Fried Chicken (Large)", price: 3100.00, discount: 5,img:"https://airfryermom.com/wp-content/uploads/2022/05/Cook-Fried-Chicken-in-Air-Fryer.jpg" },
{ itemCode: "B1041", itemName: "Hot Wings (Large)", price: 2400.00, discount: 0 ,img:"https://www.browneyedbaker.com/wp-content/uploads/2020/12/buttermilk-fried-chicken-12-square.jpg"},
{ itemCode: "B1042", itemName: "Devilled Chicken (Large)", price: 900.00, discount: 0,img:"https://foodserviceindia.com/wp-content/uploads/2023/07/Frame-65.jpg" },
{ itemCode: "B1043", itemName: "BBQ Chicken (Regular)", price: 2100.00, discount: 0,img:"https://poshjournal.com/wp-content/uploads/2021/02/thai-bbq-chicken-wings-8.jpg" },
  // Beverages
 { itemCode: "B1044", itemName: "Pepsi (330ml)", price: 990.00, discount: 5,img:"https://www.ocado.com/productImages/612/612029011_1_640x640.jpg?identifier=03aff14ac20f6f9db3749cf29dd865b7" },
  { itemCode: "B1045", itemName: "Coca-Cola (330ml)", price: 1230.00, discount: 0,img:"https://i.pinimg.com/originals/99/af/9c/99af9cd03aaf6a856fdfea9d27802f24.jpg" },
  { itemCode: "B1046", itemName: "Sprite (330ml)", price: 1500.00, discount: 3 ,img:"https://i.pinimg.com/736x/da/29/54/da29549b7fd367669b7d8502d9d0028c.jpg"},
  { itemCode: "B1047", itemName: "Mirinda (330ml)", price: 850.00, discount: 7 ,img:"https://i.pinimg.com/736x/99/0b/46/990b466538fbdc1f4b6722a6a393e908.jpg"},
]


const menupage = menuItems.map(item => `
    <div class="card m-2" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="${item.itemName}">
        <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <h5 class="card-title">Price: $${item.price.toFixed(2)}</h5>
            <h5 class="card-title">Discount: ${item.discount}%</h5>
            <button class="btn btn-primary" onclick="Order('${item.itemCode}', '${item.itemName}', ${item.discount}, ${item.price})">Order Now</button>
        </div>
    </div>
`).join('');
document.getElementById("menupage").innerHTML = menupage;


////////////////////////////////////////////////////////////////////////////////

let orderItems = JSON.parse(localStorage.getItem('orders')) || [];

////////////////Resender order page////////////////////////////////////////////
function renderOrders() {
    const orderSummary = document.getElementById("orderSummary");
    if (!orderSummary) return; 
    orderSummary.innerHTML = '';

    orderItems.forEach(order => {
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-item-code', order.itemCode);
        newRow.innerHTML = `
            <td>${order.itemCode}</td>
            <td>${order.itemName}</td>
            <td>${order.discount}%</td>
            <td class="item-qty">${order.qty}</td>
            <td class="item-price">${(order.price * order.qty).toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem('${order.itemCode}')">Remove</button></td>
        `;
        orderSummary.appendChild(newRow);
    });

    updateTotalPrice();
}

//////////////Orders///////////////////////////////////////////////////
function Order(itemCode, itemName, discount, price) {
    const discountedPrice = price - (price * discount / 100);
    const existingOrder = orderItems.find(order => order.itemCode === itemCode);
    if (existingOrder) {
        existingOrder.qty += 1;
    } else {
        orderItems.push({ itemCode, itemName, discount, price: discountedPrice, qty: 1 });
    }
    localStorage.setItem('orders', JSON.stringify(orderItems));
    renderOrders();
}

///////////////Remove Item////////////////////////////////////
function removeItem(itemCode) {
    orderItems = orderItems.filter(order => order.itemCode !== itemCode);
    localStorage.setItem('orders', JSON.stringify(orderItems));
    renderOrders();
}

/////////////////update Items////////////////////////////////////////////
function updateTotalPrice() {
    const totalPrice = orderItems.reduce((sum, order) => sum + (order.price * order.qty), 0);
    const totalPriceElement = document.getElementById("totalPrice");
    if (totalPriceElement) {
        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
}





function saveOrder() {
    const customerName = document.getElementById('customerName').value.trim();

    const orders = {
        name : customerName,
        total : totalPrice,
        items: orderItems
    };


    orderItems = []; 
    orderArray = [];
    orderArray.push(orders);
    localStorage.setItem('orders',JSON.stringify(orderItems)); 



    

    console.log(orders);
    
    

    if (!customerName) {
        alert('Please provide your name before submitting the order.');
        return;
    }

    console.log(`Order saved for customer: ${customerName}`);
    console.log('Order details:', orders.items);

    localStorage.removeItem('orders');
    orderItems = [];
    renderOrders();

    alert('Thank you for your order!');
}

// Initial render of orders on page load
renderOrders()

