import {render,screen} from '@testing-library/react'
import Navbar from '../pages/articles/Navbar.js'


test("check first test",()=>{
    render(<Navbar />)
    const linkelement = screen.getByText(/Fit/g)
    expect(linkelement).toBeInTheDocument()
})