import { useState } from "react"




const askedQuestions = [
  {title: "Is the product quality?",
  contents: "Our products are of very high quality."},
  {title: "What is the price?",
  contents: "Varies from product to product."},
  {title: "When will it arrive?",
  contents: "You will receive it in approximately 5 business days.."},
]

const Accordion = () => {
  const [openQuestion,setOpenQuestion] = useState(null)
  // const toggleQuestion = (clicked) => {
  //   setOpenQuestion((prevQuestion) => (prevQuestion === clicked ? null : clicked))
  // }
  return (
    <div className="container">
      <h2>Sıkça Sorulan Sorular</h2>
      {askedQuestions.map((question, index) => (
        <div className="question-container" key={crypto.randomUUID()}>
          <h4 onClick={() => setOpenQuestion((prevQuestion) => (prevQuestion === index ? null : index))}>
            {question.title} <span className="plus-minus-sign">{openQuestion === index ? "-" : "+"}</span>
          </h4>
          {openQuestion === index && <p>{question.contents}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;