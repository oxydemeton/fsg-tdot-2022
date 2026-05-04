export interface Station {
    /**
     * Die Funktion Prüft eine Eigegebene Lösung.
     * Ist diese Funktion nicht gegeben, wird kein Eingabefeld angezeigt und die Station mit einem Klick übersprungen werden.
     * @param answer Die vom Nutzer gegebene Antwort.
     * @returns True, wenn die Eingabe der Lösung entspricht. False, wenn nicht.
     */
    solution?: (answer:string) => boolean,
    /**
     * Optionaler Hinweis auf die Lösung.
     */
    hintSolution?: string,
    /**
     * Pixel Position des Schlosses/Symbol der Station auf der Karte.
     */
    pos: {x: number, y:number}
    /**
     * Der Angezeigte Name/Titel der Station.
    */
    name: string
    /**
     * TODO
     */
    status: number
    /**
     * Gibt einen Text zurück, der unter dem Titel im Popup der Station angezeigt wird. Ist keine FUnktion gegeben, wird keine BEschreibung angezeigt.
     * @param gruppe Die ID der Gruppe. So dass jede Gruppe eine andere Beschreibung bekommen kann.
     * @returns Stations Beschreigung.
     */
    desc?: (guppe :number) => string
    /**
     * Ebene auf der sich die Station befindet.
     */
    floor: number
}