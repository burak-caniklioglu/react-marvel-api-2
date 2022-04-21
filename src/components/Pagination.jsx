import React from "react";
import { useCharacter } from "../contexts/context";

function Pagination() {
  const { data, totalPage, offset, setOffset } = useCharacter();

  const oneToFive = totalPage.slice(0, 4).map((item, index) => {
    return (
      <div
        className={offset === item ? "btn active" : "btn"}
        onClick={() => setOffset(item)}
        key={index}
      >
        {item + 1}
      </div>
    );
  });

  const sixTo126 = totalPage
    .slice(offset - 1, offset + 2)
    .map((item, index) => {
      return (
        <div
          className={offset === item ? "btn active" : "btn"}
          onClick={() => setOffset(item)}
          key={index}
        >
          {item + 1}
        </div>
      );
    });

  const last = totalPage
    .slice(totalPage.length - 4, totalPage.length)
    .map((item, index) => {
      return (
        <div
          className={offset === item ? "btn active" : "btn"}
          onClick={() => setOffset(item)}
          key={index}
        >
          {item + 1}
        </div>
      );
    });

  const oldData = () => {
    offset > 0 && setOffset(offset - 1);
  };
  const newData = () => {
    setOffset(offset + 1);
  };

  return(
    <div id="btn-area">
                
    {
        offset <3 &&
            <div id="btns">
                {oneToFive}
                <div className="btn three-dot" onClick={() => setOffset(Math.trunc((offset + totalPage.slice(-1)[0]) / 2))}>...</div>
                <div className="btn last" onClick={() => setOffset(totalPage.slice(-1)[0])}>{totalPage.slice(-1)[0]+1}</div>  
                <div className="btn icon" onClick={newData}>&gt;</div>                 
            </div>
            
    }
    {
        offset === 3 &&
        <div id="btns">
            {oneToFive}
            <div className="btn five" onClick={newData}>5</div>
            <div className="btn three-dot"onClick={() => setOffset(Math.trunc((offset + totalPage.slice(-1)[0]) / 2))}>...</div>
            <div className="btn last"onClick={() => setOffset(totalPage.slice(-1)[0])}>{totalPage.slice(-1)[0]+1}</div>  
            <div className="btn icon" onClick={newData}>&gt;</div>                 
        </div>

    }

    {
        offset > 3 && offset < 126 &&
        <div id="btns">
            <div className="btn icon" onClick={oldData}>&#60;</div>
            <div className="btn first" onClick={() => setOffset(totalPage.slice(1)[0]-1)}>{totalPage.slice(1)[0]}</div> 
            <div className="btn three-dot"onClick={() => setOffset(Math.trunc((offset + totalPage.slice(1)[0]) / 2))}>...</div>
            {sixTo126}
            <div className="btn three-dot"onClick={() => setOffset(Math.trunc((offset + totalPage.slice(-1)[0]) / 2))}>...</div>
            <div className="btn last"onClick={() => setOffset(totalPage.slice(-1)[0])}>{totalPage.slice(-1)[0]+1}</div>  
            <div className="btn icon" onClick={newData}>&gt;</div>                   
        </div>
    }

    {
        offset >=126 &&
        <div id="btns">
            <div className="btn  icon" onClick={oldData}>&#60;</div>
            <div className="btn first" onClick={() => setOffset(totalPage.slice(1)[0]-1)}>{totalPage.slice(1)[0]}</div> 
            <div className="btn three-dot"onClick={() => setOffset(Math.trunc((offset + totalPage.slice(1)[0]) / 2))}>...</div>
            <div className="btn one-two-six" onClick={()=>(setOffset(125))}>126</div>
            {last}
            
        </div>
    }

    
    
    
</div>
  )
}

export default Pagination;
