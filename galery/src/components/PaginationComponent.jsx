import React , {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';


class PaginationComponent extends Component{
	constructor(){
		super()
		this.click = this.click.bind(this)
		this.selectPage = this.selectPage.bind(this)
	}

	click(msj){
		this.props.fecth(msj)
	}
	selectPage(numPage){
		this.props.onSelectPage(numPage)
		
	}

	createPages(){
	
		var {count} = this.props
		count = count / 20
		count = Math.ceil(count)
		
		const leng = []
		for (var i = 1 ; i <= count; i++) {
		  	leng.push(i)
		}

		return leng.map((numPage, key) => {
			return (
					<PaginationItem key ={"pagination"+ numPage} active = {(numPage === this.props.active)}> 
						<PaginationLink onClick ={this.selectPage.bind(this,numPage)} >               
							{numPage}
                 		</PaginationLink>
               		</PaginationItem>
               		)
		})      
	}

	render(){
		const {count} = this.props
		let lastPage = Math.ceil(count / 20)
		const {active} = this.props
		
		return(

			<Pagination size="lg">
                <PaginationItem disabled = {!(active > 1)}>
                  <PaginationLink previous href="#" onClick={this.selectPage.bind(this,(active - 1))}  />
                </PaginationItem>

                {this.createPages()}

                <PaginationItem disabled = {!(active < lastPage)}>
                  <PaginationLink next href="#" onClick={this.selectPage.bind(this,(active + 1))} />
                </PaginationItem>
              </Pagination>


		)
	}
}
PaginationComponent.propTypes = {
	fecth : PropTypes.func.isRequired,
	count : PropTypes.number.isRequired,
	onSelectPage : PropTypes.func.isRequired,
	active : PropTypes.number.isRequired	

}
export {PaginationComponent}