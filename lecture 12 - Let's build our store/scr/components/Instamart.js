
import { useState } from "react"

// Child
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {
        isVisible ? (
          <button onClick={() => setIsVisible(false)} >hide</button>
        ) : (
          <button onClick={() => setIsVisible(true)} >Show</button>
        )
      }
      {isVisible && <p>{description}</p>}
    </div>
  )
}


// Parent
const Instamart = () => {

  const [visibleSection, setVisibleSection] = useState("")

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold" >InstaMart</h1>

      <Section title={"About instamart"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}

        setIsVisible={() => setVisibleSection("about")}
        isVisible={visibleSection === "about"}
      />


      <Section title={"Team instamart"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />


      <Section title={"Careers"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={visibleSection === "career"}

        setIsVisible={() => setVisibleSection("career")}
      />

    </div>
  )
}

export default Instamart