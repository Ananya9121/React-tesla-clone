import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

function Home() {
  return (
      <Container>
        <Header/>
          <Section title="Model S" description="Order Onine for Touchless Delivery" bgimg="model-s.jpg" leftbuttontext="Custom Order" rightbuttontext="Existing Inventory" />
          <Section title="Model Y" description="Order Onine for Touchless Delivery" bgimg="model-y.jpg" leftbuttontext="Custom Order" rightbuttontext="Existing Inventory" />
          <Section title="Model 3" description="Order Onine for Touchless Delivery" bgimg="model-3.jpg" leftbuttontext="Custom Order" rightbuttontext="Existing Inventory" />
          <Section title="Model X" description="Order Onine for Touchless Delivery" bgimg="model-x.jpg" leftbuttontext="Custom Order" rightbuttontext="Existing Inventory" />
          <Section title="Lowest Cost Solar Panels in America" description="Money-back gaurantee" bgimg="solar-panel.jpg" leftbuttontext="Order Now" rightbuttontext="Learn more" />
          <Section title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" bgimg="solar-roof.jpg" leftbuttontext="Custom Order" rightbuttontext="Existing Inventory" />
          <Section title="Accessories" description="" bgimg="accessories.jpg" leftbuttontext="Custom Order" rightbuttontext="" />

      
      </Container>

    )
}


const Container=styled.div`

`

export default Home

