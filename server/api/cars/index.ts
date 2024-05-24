import { Request, Response } from 'express'
import { CarsModel } from '../../../models/cars'
import cloudinary from '../../middleware/cloudinary'
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary'

async function getCars(req: Request, res: Response) {
  const { q } = req.query

  if ( !q ) {
    const cars = await CarsModel.query()
    return res.status(200).json(cars)
  }
  const cars = await CarsModel
    .query()
    .whereLike('name', `%${q}%`)

  return res.status(200).json(cars)
}

async function getCarById(req: Request, res: Response) {
  const { id } = req.params

  const cars = await CarsModel.query().findById(id).throwIfNotFound()

  if (!cars) return res.status(404).send('Data tidak ditemukan')

  return res.status(200).json(cars)
}

async function addCar(req: Request, res: Response) {
  if(!req.body) {
    return res.status(400).send('Invalid Request')
  }

  const fileBase64 = req.file?.buffer.toString('base64')
  const file = `data:${req.file?.mimetype};base64,${fileBase64}`

  cloudinary.uploader.upload(file, async function(err: UploadApiErrorResponse, result: UploadApiResponse) {
    if(err) {
      console.log(err)
      return res.status(400).send('Gagal upload files')
    }

    const cars = await CarsModel.query().insert(
      {
        ...req.body,
        image: result.url
      }
    ).returning('*')
    return res.status(200).json(cars)
  })

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