# Zad. 3

Napisz hook'a, który będzie działał podobnie jak useState, z tą różnicą, że powinien aktualizować stan tylko wtedy, gdy nowa wartość będzie różnić się od poprzedniej. 

Pierwszym parametrem hooka powinna być domyślna wartość stanu.

Drugim opcjonalnym parametrem hooka powinna być funkcja porównująca te wartości. W przypadku kiedy obie wartości będą równe to funkcja ta powinna zwrócić `true`. Jeżeli funkcja nie zostanie przekazana, to porównanie wartości odbędzie się przy pomocy prostego porównania.

W katalogu znajdziesz również plik `hook.test.js`, który pomocny będzie w zweryfikowaniu poprawności Twojego rozwiązania.

Ocenione zostaną:
- prostota rozwiązania
- czytelność kodu