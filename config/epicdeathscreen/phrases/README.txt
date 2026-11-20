YOUR PHRASES / СВОИ ФРАЗЫ

Edit en_us.txt or ru_ru.txt in this folder. One phrase per line, UTF-8.
Редактируй ru_ru.txt: одна фраза на строку, кодировка UTF-8.
New phrases load at the next death or preview. No restart needed.
Изменения появятся при следующей смерти или предпросмотре, без перезапуска.

[generic]
That went well.
Ну, почти.

[fall]
Missed a step.
Не долетел.

[damage:minecraft:lava]
That's not water.
Это была не вода.

[entity:minecraft:zombie]
{attacker} got there first.
{attacker} оказался быстрее.

Sections: generic, fall, fire, drown, explosion, void, frost, magic, mob, hardcore.
You can also use [damage:modid:damage_type] or [entity:modid:entity_type].
Matching order: damage, entity, theme, generic.
Placeholders: {player}, {attacker}. Text is displayed only; no commands are run.
Lines starting with # are comments. Limits: 240 characters per phrase, 2000 lines, 256 KiB.
Only your text: set phrases=replace in ../client.properties, or use the settings button.
Только свои фразы: phrases=replace в ../client.properties или кнопка в настройках.
An invalid file keeps the last successfully loaded phrases and writes an error to latest.log.
При ошибке сохраняются последние рабочие фразы; подробности в latest.log.
