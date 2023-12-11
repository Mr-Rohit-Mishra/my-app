import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export  default function Main(props){

    const handleUpClick =()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick =()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = ("");
        setText(newText)
    }

    const handleCopy =()=>{
        var text = document.getElementById("contentBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange =(event)=>{
        // console.log("onchange");
        setText(event.target.value)
    }

    // const handleExtraSpace =()=>{
    //     let newText= ({text});
    //     setText
    // }

    const[text, setText] = useState(''); 

    return(
        <>
            <div className={`${props.mode} main`}>
                

                {/* <div className="booking-container">
                    <h1 className="mb-5 text-center">{props.formheading}</h1>
                    <form className="form" method="post" >
                        <div className="upper">
                            <div>
                                <input type="radio" id="oneway" value="oneway" name="oneway"/>
                                <label htmlFor="oneway">Oneway</label>
                            </div>
                            <div>
                                <input type="radio" id="roundtrip" value="roundtrip" name="roundtrip"/>
                                <label htmlFor="roundtrip">Roundtrip</label>
                            </div>
                            <div>
                                <input type="radio" id="multicity" value="multicity" name="multicity"/>
                                <label htmlFor="multicity">Multicity</label>
                            </div>
                        </div>
                        <div className="lower">
                            <div>
                                <label htmlFor="city">Destination</label>
                                <input type="text" id="city" placeholder="Enter city name" name="city"/>
                            </div>
                            <div>
                                <label htmlFor="date">Check-In</label>
                                <input type="date" id="date"  name="date"/>

                            </div>
                            <div>
                                <label htmlFor="date">Check-Out</label>
                                <input type="date" id="date"  name="date"/>

                            </div>
                            <div>
                                <select name="type" id="type">
                                    <option value="adult">Adult</option>
                                    <option value="children">Children</option>
                                </select>
                                <input type="number" id="number" name="number"/>
                            </div>  
                            <div>
                                <select name="type" id="type">
                                    <option value="adult">Adult</option>
                                    <option value="children">Children</option>
                                </select>
                                <input type="number" id="number" name="number"/>
                            </div>  
                        </div>
                        <button type="submit" className="button">Check Availability</button>
                    </form>
                </div> */}


                <div className="uppercase">
                    <h4>{props.head2}</h4>
                    <form className="uppercaseform">

                        <textarea  className="mt-3" id="contentBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    </form>
                    <div  className="buttons">
                        <button  className="btn btn-sm btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                        <button  className="btn btn-sm btn-danger my-3 mx-2" onClick={handleloClick}>Convert to Lower Case</button>
                        <button  className="btn btn-sm btn-warning my-3 mx-2" onClick={handleCopy}>Copy Text</button>
                        {/* <button  className="btn btn-sm btn-info my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> */}
                        <button  className="btn btn-sm btn-success my-3 mx-2" onClick={handleClearClick}>Clear</button>

                    </div>
                    <h4  className="mt-3">Text Summary</h4>
                    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                    <p>It will take {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read This text. </p>
                    <h4>Preview</h4>
                    <details >{text.length>0?text:"Enter something in text area to preview"}</details>
                </div>

            </div>
        </>
    );
}

//all prop types:

//this is used to fixation of type of string which not necessary but we can use it will show error in inspect>compile section if the prop was given other than this which is defined
Main.propTypes={
    formheading: PropTypes.string
}

//we can use is required also it will show error at compilation time if the string is not provided
// Main.propTypes={
//     formheading: PropTypes.string.isRequired
// }



//we can also set default prop that will execute when we will not give any prop value in app.js
Main.defaultProps={
    formheading: 'set heading of form '
};