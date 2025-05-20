/**
 * Документация по использованию:
 *   > Используется для создания кнопок / ссылок
 * 
 * Функции:
 *   > *.setName('Button name') - Добавляет имя кнопки (По умолчанию 'Button name');
 *   > *.setTag('Button' or 'Url') - Тип кнопки (По умолчанию 'Url');
 *   > *.setStyle('1' or '2') - Стиль кнопки (По умолчанию '1');
 *   > .setUrl('Url') - Добавить Url для кнопки (Только для тега 'Url');
 *   > .settarget('target') - Добавить атрибут target для кнопки (Только для тега 'Url');
 *   > .setId('Id') - Добавить Id для кнопки (Только для тега 'Id');
 *   > * - Обязательные данные!
 */

class Button {
  constructor() {
    this.name = 'Button name'; this.tag = 'Url'; this.style = '1'; this.url = '/'; this.target = null; this.id = null;
  }

  setName(name) {
    if(!name) return console.error('Button not name!');

    this.name = name;
    return this;
  }

  setTag(tag) {
    if(!tag || (tag !== 'Button' && tag!=='Url')) return;

    this.tag = tag;
    return this;
  }

  setStyle(style) {
    if(!style || (style !== '1' && style!=='2')) return;
    
    this.style = style;
    return this;
  }

  setUrl(url) {
    if(!url) return;

    this.url = url;
    return this;
  }

  setTarget(target) {
    if(!target) return;

    this.target = target;
    return this;
  }

  setId(id) {
    if(!id) return;

    this.id = id;
    return this;
  }

  render() {
    const { name, tag, style, url, target, id } = this;
    const Tag = tag.replace('Url', 'a').replace('Button', 'button'); 

    return (
      <Tag 
        {...(tag === 'Url' ? { href: url, target } : {})}
        {...(tag === 'Button' ? { id } : {})}
        className={
          `border border-[#2a2a2a] px-6 py-3 rounded-md text-[20px] font-medium transition duration-300 ease-in-out ${
            style === '1' ? 'hover:bg-[#2a2a2a]/10 bg-[#2a2a2a]' : 'hover:bg-[#2a2a2a]'
          }`
        }
      >{name}</Tag>
    );
  }
}

export default Button;