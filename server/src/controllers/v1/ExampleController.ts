import { Router, Request, Response, NextFunction } from 'express';
import * as VError from 'verror';
import axios from 'axios';
import { ExampleService, FilterService } from '../../services';
import Logger from '../../Logger';
import BaseController from '../BaseController';
import config from '../../config';
import data from './constants';

const logger = new Logger();

class ExampleController extends BaseController {
  public init(): void {
    this.router.get('/', this.get);
    this.router.get('/sum', this.getSum);
    this.router.get('/bitcoin', this.getBitcoinPrice);
    this.router.get('/training', this.getTraining);
    this.router.get('/filteredtraining/:option', this.getFilteredTraining);
  }

  public get(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController index route entered');

    return res.json({ result: 'exampleController' });
  }

  public getSum(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController /sum route entered');

    const first = 3;
    const second = 5;

    const sum = ExampleService.add(first, second);
    return res.json({ sum });
  }

  public getTraining(req: Request, res: Response, next: NextFunction): Response {
    logger.info('exampleController /training route entered');
    return res.json({ trainings: data });
  }

  public getFilteredTraining(req: Request, res: Response, next: NextFunction): Response {
    const option = req.params.option;
    console.log(option);

    const trainings = FilterService.filter(data, option);
    return res.json({ trainings });
  }

  public async getBitcoinPrice(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    const bitcoinUrl = config.get('bitcoinUrl');

    try {
      const response = await axios.get(bitcoinUrl);

      return res.json({ price: response.data[0].price_usd });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
}

export default ExampleController;
