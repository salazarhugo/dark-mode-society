import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../services/theme.service";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  count: Observable<any> | undefined

  constructor(
    public themeService: ThemeService,
    public fs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.count = this.fs.collection("stats").doc("toggleCount").snapshotChanges().pipe(map(doc => {
      return doc.payload.data()
    }))
  }

  toggleDark() {
    this.themeService.isDarkTheme = !this.themeService.isDarkTheme
    this.countToggle()
  }

  countToggle() {
    const a = firebase.firestore.FieldValue.increment(1)
    this.fs.collection("stats").doc("toggleCount")
      .update({ count: a})
  }
}
