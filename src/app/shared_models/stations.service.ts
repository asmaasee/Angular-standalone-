import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Stations } from './stationsList';
import { StationsSales } from '../pages/main/sidepart/station-sales/stationsSales';

@Injectable({ providedIn: 'root' })
export class StationsService {
  // جلب بيانات المحطات
  getStations(offset = 0, limit = 2): Observable<Stations[]> {
    const stationsList: Stations[] = [
      {
        name: 'STATION NAME DUMMY A',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '8-1-2021 | 10:16 PM',
        totalTransaction: 5161,
        availability: true,
        progress: 90,
      },
      {
        name: 'STATION NAME DUMMY B',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '9-1-2021 | 11:20 AM',
        totalTransaction: 5161,
        availability: true,
        progress: 100,
      },
      {
        name: 'STATION NAME DUMMY C',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '10-1-2021 | 01:40 PM',
        totalTransaction: 5161,
        availability: false,
        progress: 60,
      },
      {
        name: 'STATION NAME DUMMY D',
        totalSales: 662721,
        totalValue: 500,
        compressionState: 'Compression',
        maxTransaction: 20,
        maxTransactionDate: '11-1-2021 | 07:00 PM',
        totalTransaction: 5161,
        availability: true,
        progress: 80,
      },
      {
        name: 'STATION NAME DUMMY E',
        totalSales: 450000,
        totalValue: 300,
        compressionState: 'Normal',
        maxTransaction: 15,
        maxTransactionDate: '12-1-2021 | 03:00 PM',
        totalTransaction: 3000,
        availability: true,
        progress: 75,
      }
    ];

    //  ترجيع مجموعة فرعية من البيانات حسب offset و limit
    const pagedStations = stationsList.slice(offset, offset + limit);
    return of(pagedStations).pipe(delay(500)); // لمحاكاة انتظار السيرفر
  }

  //  جلب بيانات مبيعات المحطات
  getStationsSales(): Observable<StationsSales[]> {
    const stationsSales: StationsSales[] = [
      {
        name: 'STATION NAME DUMMY',
        value: '62721 m³',
        progress: 35,
      },
      {
        name: 'STATION NAME DUMMY',
        value: '62721 m³',
        progress: 35,
      },
      {
        name: 'STATION NAME DUMMY',
        value: 'NM',
        progress: 78,
      },
    ];

    return of(stationsSales).pipe(delay(500));
  }
}
