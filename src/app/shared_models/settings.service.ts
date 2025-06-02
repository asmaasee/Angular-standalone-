import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Setting {
  id?: number;
  key: string;
  value: string;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {

  private apiUrl = '/api/settings'; //الـ MockDataService

  constructor(private http: HttpClient) {}

  getSettings(): Observable<Setting[]> {
    return this.http.get<Setting[]>(this.apiUrl);
  }

  addSetting(setting: Setting): Observable<Setting> {
    return this.http.post<Setting>(this.apiUrl, setting);
  }

  updateSetting(id: number, setting: Setting): Observable<Setting> {
  return this.http.put<Setting>(`${this.apiUrl}/${id}`, setting);
}

  deleteSetting(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
