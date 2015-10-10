import Ember from 'ember';

const { run } = Ember;

export default function(app, i18n, value) {
  const {
    clickOn,
    find,
    findWithAssert,
    fillIn,
    t,
    wait
  } = app.testHelpers;
  const text = t(i18n);
  const label = `label:contains("${text}")`;

  run(() => {
    const $label = find(label);
    const id = $label.prop('for');

    if (id) {
      const $element = findWithAssert(`#${id}`);

      if ($element.prop('type') === 'checkbox') {
        $element.prop('checked', value);
      } else {
        $element.val(value);
      }
    } else {
      const nested = [
        `${label} input:not([type="checkbox"])`,
        `${label} textarea`,
        `${label} select`,
      ].join(',');

      fillIn(nested, value)
        .then(
          () => wait(),
          () => clickOn(i18n)
        );
    }

    return wait();
  });
}
