
import { App } from "./App";
import './main.css'

import { SCsInitGlobal } from '@ostis/scs-js-editor';


SCsInitGlobal();

const app: App = App.Instance();
app.Initialize();