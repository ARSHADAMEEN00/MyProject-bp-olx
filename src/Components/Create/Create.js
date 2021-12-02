import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../FirebaseContext";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image,setImage] = useState('')
  const history =useHistory()
  const {firebase}= useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
console.log(image)
const date =new Date()
  const handleImgSubmit=(e)=>{
    e.priventDefualt()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        console.log(ref)
        firebase.firestore().collection('products').add({
           
          category,
          price,                                                                                                                                                                                                                                                                                                                                                      
          url,
          userId:user.uid,
          createAt:date.toDateString()
        }) 
        history.push('/')
        
      })
    })
   
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <div>
          
         { image ?   <img alt="" width="200px" height="200px" src={URL.createObjectURL(image)}></img> :''}
          </div>
          <form>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.value)
            }} type="file" />
            <br />
            <button onClick={handleImgSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
