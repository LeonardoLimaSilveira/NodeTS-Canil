import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      menu: createMenuObject('all'),
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  })
}
export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      menu: createMenuObject('dog'),
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    }
  })
}
export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      menu: createMenuObject('cat'),
      title: 'Gatos',
      background: 'banner_cat.jpg'
    }
  })
}
export const fish = (req: Request, res: Response) => {
  res.render('pages/page', {
    banner: {
      menu: createMenuObject('fish'),
      title: 'Peixes',
      background: 'banner_fish.jpg'
    }
  })
}
