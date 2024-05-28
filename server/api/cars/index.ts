import { Request, Response } from 'express'

let cars = {
  
}

function getCars(req: Request, res: Response) {
  return res.status(200).json()
}

function getCarById(req: Request, res: Response) {
  return res.status(200)
}

function addCar(req: Request, res: Response) {
  return res.status(200)
}

function updateCarById(req: Request, res: Response) {
  return res.status(200)
}

function deleteCarById(req: Request, res: Response) {
  return res.status(200)
}

export {
  getCars,
  getCarById,
  addCar,
  updateCarById,
  deleteCarById
}