import { MarketData } from './market-data';

export interface CryptoInfo {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  market_data: MarketData;
}
