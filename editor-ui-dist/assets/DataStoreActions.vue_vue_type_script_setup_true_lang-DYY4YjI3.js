import { d as defineComponent, a as useToast, x as computed, gx as DATA_STORE_CARD_ACTIONS, c as useI18n, e as createBlock, g as openBlock, e6 as N8nActionToggle, aq as useMessage, ar as MODAL_CONFIRM } from "./index-CEfijIeI.js";
import { u as useDataStoreStore } from "./dataStore.store-DFrOnY8I.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataStoreActions",
  props: {
    dataStore: {},
    isReadOnly: { type: Boolean, default: false }
  },
  emits: ["rename", "onDeleted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dataStoreStore = useDataStoreStore();
    const i18n = useI18n();
    const message = useMessage();
    const toast = useToast();
    const actions = computed(() => [
      {
        label: i18n.baseText("generic.rename"),
        value: DATA_STORE_CARD_ACTIONS.RENAME,
        disabled: props.isReadOnly
      },
      {
        label: i18n.baseText("generic.delete"),
        value: DATA_STORE_CARD_ACTIONS.DELETE,
        disabled: props.isReadOnly
      }
    ]);
    const onAction = async (action) => {
      switch (action) {
        case DATA_STORE_CARD_ACTIONS.RENAME: {
          emit("rename", {
            dataStore: props.dataStore,
            action: "rename"
          });
          break;
        }
        case DATA_STORE_CARD_ACTIONS.DELETE: {
          const promptResponse = await message.confirm(
            i18n.baseText("dataStore.delete.confirm.message", {
              interpolate: { name: props.dataStore.name }
            }),
            i18n.baseText("dataStore.delete.confirm.title"),
            {
              confirmButtonText: i18n.baseText("generic.delete"),
              cancelButtonText: i18n.baseText("generic.cancel")
            }
          );
          if (promptResponse === MODAL_CONFIRM) {
            await deleteDataStore();
          }
          break;
        }
      }
    };
    const deleteDataStore = async () => {
      try {
        const deleted = await dataStoreStore.deleteDataStore(
          props.dataStore.id,
          props.dataStore.projectId
        );
        if (!deleted) {
          throw new Error(i18n.baseText("generic.unknownError"));
        }
        emit("onDeleted");
      } catch (error) {
        toast.showError(error, i18n.baseText("dataStore.delete.error"));
      }
    };
    return (_ctx, _cache) => {
      const _component_N8nActionToggle = N8nActionToggle;
      return openBlock(), createBlock(_component_N8nActionToggle, {
        actions: actions.value,
        theme: "dark",
        "data-test-id": "data-store-card-actions",
        onAction
      }, null, 8, ["actions"]);
    };
  }
});
export {
  _sfc_main as _
};
