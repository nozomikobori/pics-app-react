import React from 'react'; 

class SeachBar extends React.Component {
    // // Callback function
    // onInputChange(event) {
    //    console.log(event.target.value); 
    // }

    state = { term: ''}; 
    
    onFormSubmit = (event) => {
        event.preventDefault(); 

        // console.log(this.state.term);
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <label htmlFor="">Image Search</label>
                    <input 
                        className="field" 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})} 
                    />
                </form>
            </div>
        );
    }
}

export default SeachBar; 