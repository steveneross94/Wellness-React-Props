import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

const wellnessFactorsSortArray = [...wellnessFactors]
wellnessFactorsSortArray.sort((factor1,factor2) => factor2.stars - factor1.stars)

export default class GuidanceContainer extends React.Component {

    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority</td>
                        </tr>
                    </thead>
                    <tbody>                        
                        {wellnessFactorsSortArray.map((factor, index) => 
                            <GuidanceItem 
                                key={index}
                                title={factor.title}
                                image={factor.image}
                                color={factor.color}
                                description={factor.description}
                                stars={factor.stars}
                                isPriority={factor.isPriority}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}