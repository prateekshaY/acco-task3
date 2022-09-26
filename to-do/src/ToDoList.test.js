import React from "react"
import { render, screen, within } from "@testing-library/react"
import ToDoList from './ToDoList';
//const list = ["Bananas", "Apples", "Strawberries", "Grapes", "Oranges"]
it("should render list of 5 fruits", () => {
  render(<ToDoList list={ ["Bananas", "Apples", "Strawberries", "Grapes", "Oranges"]} />)
  const list = screen.getByRole("list", {
    name: /to-do-list/i,
  })
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")
  expect(items.length).toBe(5)
})