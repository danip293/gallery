import React , {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


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
		const  active = "active"
		var {count} = this.props
		count = count / 20
		count = Math.ceil(count)
		
		const leng = []
		for (var i = 1 ; i <= count; i++) {
		  	leng.push(i)
		}

		return leng.map((numPage, key) => {
			return (
					<PaginationItem key ={"pagination"+ numPage} active = {(numPage==this.props.active)}> 
						<PaginationLink onClick ={this.selectPage.bind(this,numPage)} >               
							{numPage}
                 		</PaginationLink>
               		</PaginationItem>
               		)
		})      
	}

	render(){
		return(

			<Pagination size="md">
                <PaginationItem disabled = {this.props.preview == null}>
                  <PaginationLink previous href="#" onClick={this.click.bind(this,this.props.preview)}  />
                </PaginationItem>

                {this.createPages()}

                <PaginationItem disabled = {(this.props.next == null)}>
                  <PaginationLink next href="#" onClick={this.click.bind(this,this.props.next)} />
                </PaginationItem>
              </Pagination>


			)
	}
}
export {PaginationComponent}