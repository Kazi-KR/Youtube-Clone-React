import React from 'react';

class SeachBar extends React.Component{
    state={term:''}
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className='ui segment searchbar'>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Search a video</label>
                    <input type="text" 
                    id='input' 
                    name="video"
                    value={this.state.term}
                    placeholder="video"
                    onChange={e=>{this.setState({term:e.target.value})}}
                    />
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;