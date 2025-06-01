import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 84
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 100
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 50
});

export const concatinateSelector = selector({
    key: "concatinateSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom)
        const Total = networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
        return Total;
    }
})
