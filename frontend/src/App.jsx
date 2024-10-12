import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { TbError404Off } from "react-icons/tb"
import { BrowserRouter, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import api from "./api";


function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}


function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}


const App = () => {


    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filterText, setFilterText] = useState("");

    const handleFilterText = (val) => {
        setFilterText(val);
    };

    const handelSearchText = (val) => {
        setSearchText(val);
    };

    const filteredNotes =
        filterText === "BUSINESS"
            ? notes.filter((note) => note.category == "BUSINESS")
            : filterText === "PERSONAL"
                ? notes.filter((note) => note.category == "PERSONAL")
                : filterText === "IMPORTANT"
                    ? notes.filter((note) => note.category == "IMPORTANT")
                    : notes;


    useEffect(() => {
        if (searchText.length < 3) return;
        api.get(`/notes-search/?search=${searchText}`)
            .then(res => {
                console.log(res.data)
                setNotes(res.data)
            })
            .catch(err => console.log(err.message))
    }, [searchText])

    useEffect(() => {
        setIsLoading(true);
        api.get("/notes/")
            .then((res) => {
                // console.log(res.data);
                setNotes(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const addNote = (data) => {
        api.post("/notes/", data)
            .then((res) => {
                setNotes([...notes, data]);
                toast.success("A new note has been added");
                console.log(res.data);
                location.reload();
            })

            .catch((err) => {
                console.log(console.log(err.message));
            });
    };

    const updateNote = (data, slug) => {
        api.put(`/notes/${slug}/`, data)
            .then((res) => {
                console.log(res.data);
                toast.success("Note updated succesfully");
            })

            .catch((err) => console.log(err.message));
    };

    const deleteNote = (slug) => {
        api.delete(`/notes/${slug}/`)
            .catch((err) => console.log(err.message));
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={
                    <MainLayout
                        searchText={searchText}
                        handelSearchText={handelSearchText}
                    />
                }
            >
                <Route
                    index
                    element={
                        <ProtectedRoute>
                            <HomePage
                                notes={filteredNotes}
                                loading={isLoading}
                                handleFilterText={handleFilterText}
                            />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/add-note"
                    element={
                        <ProtectedRoute>
                            <AddNotePage addNote={addNote} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit-note/:slug"
                    element={
                        <ProtectedRoute>
                            <EditNotePage updateNote={updateNote} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/notes/:slug"
                    element={
                        <ProtectedRoute>
                            <NoteDetailPage deleteNote={deleteNote} />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<RegisterAndLogout />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
