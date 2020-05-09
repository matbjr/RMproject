import React from 'react'
import IndividualResultsCard from './individual_results_cards'
import IndividualQuizzesCards from './individual_quizzes_cards'
import IndividualTopicCard from './individual_topic_card'

function IndividualResultsContainer() {
  return (
    <div className='small'>
      <IndividualResultsCard />
      <IndividualTopicCard />
      <IndividualQuizzesCards />
    </div>
  )
}

export default IndividualResultsContainer
