import React , {Component} from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class PaginationComponent extends Component{

	createPages(){
		var {count} = this.props
		const {url} = "#"
		count = count / 20
		const leng = []
		for (var i = 1 ; i <= count; i++) {
		  	leng.push(i)
		}

		return leng.map(function(obj, key) {
			return (<PaginationItem key ={"pagination"+obj}> 
					<PaginationLink href="#">               
						{obj}
                 	</PaginationLink>
               		</PaginationItem>)
		})      
	}

	render(){
		return(

			<Pagination size="md">
                <PaginationItem>
                  <PaginationLink previous href="#" />
                </PaginationItem>

                {this.createPages()}

                <PaginationItem>
                  <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination>


			)
	}
}
export {PaginationComponent}