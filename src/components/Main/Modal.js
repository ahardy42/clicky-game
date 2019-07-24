import React from 'react';
import './Main.css';

// game start / re-start modal
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.setStyle = this.setStyle.bind(this);
    }
    handleClick() {
        this.props.hide();
    }
    setStyle() {
        let display = this.props.hidden ? "hidden" : "block";
        let style = {display: display}
        return style;
    }
    render() {
        return (
            <div className={`"modal ${this.props.hidden ? '' : 'show'}`} tabIndex="-1" role="dialog" style={this.setStyle()}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" onClick={this.handleClick} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Play!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;