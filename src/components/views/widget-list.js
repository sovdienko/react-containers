import React from 'react';


// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.widgets.map(widget => {

        return (
          <div key={widget.id} className="data-list-item">
            <div className="details">{widget.name}</div>
            <div className="controls">
              <button onClick={() => props.deleteWidget(widget.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
