import React, {PureComponent} from 'react'

class AdForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit} className = "form-style-3">
				<div ClassName = "AddAdForm">
					<label htmlFor="title">Title: </label>
					<input name="title" id="title" value={
						this.state.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div ClassName = "AddAdForm">
					<label htmlFor="price">Price: </label>
					<input name="price" id="price" value={
						this.state.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div ClassName = "AddAdForm">
					<label htmlFor="description">Description: </label>
					<input name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>
                
                <div ClassName = "AddAdForm">
					<label htmlFor="image">Image URL: </label>
					<input name="image" id="image" value={
						this.state.image || ''
					} onChange={ this.handleChange } />
				</div>

                 <div ClassName = "AddAdForm">
					<label htmlFor="email">Email address: </label>
					<input name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

                 <div ClassName = "AddAdForm">
					<label htmlFor="phone">Phone Number: </label>
					<input name="phone" id="phone" value={
						this.state.phone || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save! :)</button>
			</form>
		)
	}
}

export default AdForm