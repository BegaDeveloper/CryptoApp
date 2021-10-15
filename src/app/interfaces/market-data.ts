export interface MarketData {
  price_usd: number;
  price_btc: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_24_hours: number;
  percent_change_btc_last_24_hours: number;
}
