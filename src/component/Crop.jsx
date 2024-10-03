// src/component/Crops.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import appleImage from '../img/pomegranet.jpg';
import bananaImage from '../img/download.jfif';
import carrotImage from '../img/chili.jfif';
import onionImage from '../img/onion.jfif';
import grapeImage from '../img/grapes.jfif';
import tomatoImage from '../img/tomato.jfif';
import './Crop.css'; // Adjust this CSS for crops
import 'bootstrap/dist/css/bootstrap.min.css';

const Crops = () => {
  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [expandedProducts, setExpandedProducts] = useState({}); // Object to keep track of expanded state

  const products = {
    fruits: [
      { 
        name: 'Pomegranets/डाळिंब', 
        image: appleImage, 
        rating: 5, 
        description: 'डाळिंबाची लागवड ही भारतातील एक महत्त्वाची कृषी क्रिया आहे आणि हा देश डाळिंबाच्या उत्पादनात जगातील आघाडीच्या देशांपैकी एक आहे. भारतातील प्रमुख डाळिंब उत्पादक राज्ये महाराष्ट्र, कर्नाटक, आंध्र प्रदेश, गुजरात आणि तामिळनाडू आहेत. भारतातील हवामान डाळिंब लागवडीसाठी आदर्श आहे, कारण गरम उन्हाळा आणि थंड हिवाळा असलेल्या भागात फळे येतात. डाळिंबाची झाडे सिंचन आणि पावसावर आधारित अशा दोन्ही परिस्थितीत उगवली जातात, पूर्वीची झाडे अधिक सामान्य आहेत. भारतातील डाळिंबाची लागवड मुख्यतः लहान शेतात केली जाते, सरासरी जमीन 1-2 हेक्टर आहे.' 
      },
      { name: 'Banana/केळी',
         image: bananaImage, 
         rating: 4,
         description: 'केळी हे मुसा (कुटुंब Musaceae) वंशाच्या वनस्पतीचे फळ आहे, ज्याची लागवड प्रामुख्याने अन्नासाठी केली जाते आणि दुसरे म्हणजे कापड उद्योगात वापरल्या जाणाऱ्या फायबरच्या उत्पादनासाठी देखील शोभेच्या उद्देशाने लागवड केली जाते. जवळजवळ सर्व आधुनिक खाण्यायोग्य पार्थेनोकार्पिक केळी दोन जंगली प्रजातींमधून येतात - मुसा एक्युमिनाटामुसा बाल्बिसियाना. केळीची वैज्ञानिक नावे मुसा अक्युमिनाटा, मुसा बाल्बिसियाना किंवा मुसा अक्युमिनाटा आणि बाल्बिसियाना यांची संकरित आहेत, जी त्यांच्या जीनोमिक घटनेवर अवलंबून आहेत. केळी जोमदारपणे वाढणारी, मोनोकोटीलेडोनस वनौषधी वनस्पती आहेत. केळी हे झाड नसून उच्च वनौषधी आहे जी 15 पर्यंत पोहोचू शकते. मीटर उंची. वनस्पती आणि फळांचा आकार, वनस्पती आकारविज्ञान, फळांचा दर्जा आणि रोग आणि कीटकांच्या प्रतिकारशक्तीमध्ये या जाती मोठ्या प्रमाणात बदलतात. बहुतेक केळी पिकल्यावर गोड चव असतात; याला केळी आणि केळी शिजवणे हे अपवाद आहेत. केळी ही संकरित केळी आहेत ज्यात नर फुलांचा अक्ष एकतर क्षीण झालेला असतो, अभाव असतो किंवा नर फुलांचे अवशेष असतात. केळी नेहमी वापरण्यापूर्वी शिजवली जातात आणि केळीपेक्षा स्टार्च जास्त असते. केळीचे दोन गट, फ्रेंच आणि हॉर्न, गोड केळीपेक्षा कमी फळ देतात. फुलणेचे पुरुष भाग उपस्थित आहेत की अनुपस्थित आहेत याबद्दल गट भिन्न आहेत..' },
      { name: 'Grapes/द्राक्षे',
         image: grapeImage, 
         rating: 5, 
         description: 'द्राक्ष (व्हिटिस व्हिनिफेरा) हे समशीतोष्ण ते उष्ण प्रदेशात घेतले जाते, तथापि, उष्ण आणि कोरडे हवामान त्याच्या लागवडीसाठी आदर्श आहे. भारतीय द्राक्षे रंगीत, पांढरी, बियाणे, बियाणे नसलेली, मोठी आणि लहान बेरी अशा विविध वैशिष्ट्यांमध्ये येतात. भारतीय द्राक्षे 250 सरासरी समुद्रसपाटीवर आणि त्याहून अधिक यशस्वीरित्या पिकवली जातात.' },
    ],
    vegetables: [
      { name: 'Chili/मिरची', image: carrotImage, rating: 4, description: 'हे भारतातील सर्वात मौल्यवान पीक म्हणून ओळखले जाते. हे विविध करी आणि चटण्यांचे मुख्य घटक म्हणून वापरले जाते, भाज्या, मसाले, मसाले, सॉस आणि लोणचे देखील वापरले जाते. मिरचीमध्ये तिखटपणा "कॅप्सायसिन" या अल्कलॉइड या सक्रिय घटकामुळे होतो. मिरचीचे मूळ घर ग्वाटेमालाचे दुय्यम मूळ असलेले मेक्सिको मानले जाते. 17 व्या शतकाच्या मध्यात पोर्तुगीजांनी गोव्यात मिरची भारतात आणली आणि तेव्हापासून ती झपाट्याने देशभर पसरली. Capsaicin मध्ये अनेक औषधी गुणधर्म आहेत, विशेषत: कर्करोगविरोधी एजंट आणि झटपट वेदना निवारक म्हणून. हे रक्तवाहिन्या विस्तारून हृदयविकारापासून बचाव करते. आशियातील भारत, चीन, पाकिस्तान, इंडोनेशिया, कोरिया, तुर्की आणि श्रीलंका हे प्रमुख मिरची उत्पादक देश आहेत; आफ्रिकेतील नायजेरिया, घाना, ट्युनिशिया आणि इजिप्त; मेक्सिको, उत्तर आणि मध्य अमेरिकेतील युनायटेड स्टेट्स ऑफ अमेरिका; युरोपमधील युगोस्लाव्हिया, स्पेन, रोमानिया, बल्गेरिया, इटली आणि हंगेरी आणि दक्षिण अमेरिकेतील अर्जेंटिना, पेरू आणि ब्राझील. मिरची उत्पादनात भारत जगात आघाडीवर असून त्यानंतर चीन आणि पाकिस्तानचा क्रमांक लागतो. आंध्र प्रदेश, महाराष्ट्र, कर्नाटक, ओरिसा, तामिळनाडू, बिहार, उत्तर प्रदेश आणि राजस्थान ही मुख्य मिरची वाढवणारी राज्ये आहेत..' },
      { 
        name: 'Tomato/टोमॅटो', 
        image: tomatoImage, 
        rating: 5, 
        description: 'टोमॅटोचे मूळ दक्षिण अमेरिकेतील पेरूमध्ये आहे. हे भारतातील महत्त्वाचे व्यावसायिक भाजीपाला पीक आहे. बटाट्यानंतर हे जगातील दुसरे महत्त्वाचे पीक आहे. फळे कच्चे किंवा शिजवलेल्या स्वरूपात खाल्ले जातात. हे व्हिटॅमिन ए, सी, पोटॅशियम आणि खनिजांचा समृद्ध स्रोत आहे. याचा वापर सूप, ज्यूस आणि केच अप, पावडरमध्ये होतो. बिहार, कर्नाटक, उत्तर प्रदेश, ओरिसा, महाराष्ट्र, आंध्र प्रदेश, मध्य प्रदेश आणि पश्चिम बंगाल ही प्रमुख टोमॅटो उत्पादक राज्ये आहेत. पंजाब राज्यात अमृतसर, रोपर, जालंधर, होशियारपूर हे टोमॅटो उत्पादक जिल्हे आहेत.' 
      },
      { name: 'Onion/कांदा', image: onionImage, rating: 5, description: 'किमान 7,000 वर्षांपासून कांदा पिकवला जातो आणि निवडक पद्धतीने लागवड केली जाते. ही एक द्विवार्षिक वनस्पती आहे परंतु सामान्यतः वार्षिक म्हणून उगवली जाते. आधुनिक जाती सामान्यत: 15 ते 45 सेमी (6 ते 18 इंच) उंचीपर्यंत वाढतात. पाने पिवळसर- निळसर हिरवी असतात आणि आळीपाळीने चपटा, पंख्याच्या आकारात वाढतात. ते मांसल, पोकळ आणि दंडगोलाकार असतात, त्यांची एक बाजू सपाट असते. ते वरच्या मार्गाच्या सुमारे एक चतुर्थांश मार्गावर आहेत, त्यापलीकडे ते टिपर टू ब्लंट टिप्स. प्रत्येक पानाचा पाया एक चपटा, सामान्यतः पांढरा आवरण असतो जो बल्बच्या बेसल प्लेटमधून वाढतो. प्लेटच्या खालच्या बाजूने, तंतुमय मुळांचा एक बंडल जमिनीत थोड्या वेळाने पसरतो. जसजसा कांदा परिपक्व होतो तसतसे पानांच्या तळांमध्ये अन्नसाठा जमा होतो आणि कांद्याचा बल्ब फुगतो.' },
    ],
  };

  const handleToggleExpand = (index) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [index]: !prev[index] // Toggle the expanded state for the specific product index
    }));
  };

  return (
    
  
<div className="crops-container">
      <div className="crops-sidebar">
        <h3 className="sidebar-title">Crop Categories</h3>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="#" onClick={() => setSelectedCategory('fruits')}>Fruits / फळे</Link>
          </li>
          <li className="sidebar-item">
            <Link to="#" onClick={() => setSelectedCategory('vegetables')}>Vegetables / भाजीपाला</Link>
          </li>
        </ul>
      </div>
      <div className="product-card-container">
        <div className="product-card-header">
          <h1 className="product-category-title">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Categories</h1>
        </div>
        <div className="product-list">
          {products[selectedCategory].map((product, index) => {
            const maxLength = 200; // Maximum length of the truncated description
            const shortDescription = product.description.substring(0, maxLength) + '...';
            const isExpanded = expandedProducts[index]; // Check if this product is expanded

            return (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">
                  {isExpanded ? product.description : shortDescription}
                  <span 
                    className="toggle-description"
                    onClick={() => handleToggleExpand(index)}
                  >
                    {isExpanded ? ' Show Less' : ' Show More'}
                  </span>
                </p>
                <div className="product-rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <button className="product-details-btn">VIEW DETAILS</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  
  );
};

export default Crops;
