import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Guitar, Piano, Music, BookOpen, PenTool } from "lucide-react";
export default function MusicLessonsSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2 text-indigo-700">Craig's Music Studio</h1>
        <p className="text-lg text-gray-700">Guitar, Bass, Piano, Music Theory, and Songwriting Lessons</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Guitar className="mx-auto text-indigo-600 mb-4" size={48} />
            <h2 className="text-2xl font-semibold mb-2">Guitar Lessons</h2>
            <p className="text-gray-600">Learn acoustic and electric guitar from beginner to advanced, with tailored lessons for all ages.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Music className="mx-auto text-indigo-600 mb-4" size={48} />
            <h2 className="text-2xl font-semibold mb-2"<Music ... />
            <p className="text-gray-600">Master rhythm, groove, and technique on bass guitar in a fun and supportive environment.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <Piano className="mx-auto text-indigo-600 mb-4" size={48} />
            <h2 className="text-2xl font-semibold mb-2">Piano Lessons</h2>
            <p className="text-gray-600">Explore classical, jazz, and modern piano styles with personalized instruction.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <BookOpen className="mx-auto text-indigo-600 mb-4" size={48} />
            <h2 className="text-2xl font-semibold mb-2">Music Theory</h2>
            <p className="text-gray-600">Gain a solid foundation in music theory to support your playing, composing, and understanding of music structure.</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6 text-center">
            <PenTool className="mx-auto text-indigo-600 mb-4" size={48} />
            <h2 className="text-2xl font-semibold mb-2">Songwriting</h2>
            <p className="text-gray-600">Unleash your creativity and learn to write songs with strong lyrics, melodies, and arrangements.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">About Me</h2>
        <p className="text-gray-700 text-center">
          Hi, I'm Craig! With years of experience teaching music and performing, I provide customized lessons that help students grow in confidence and skill. Whether you're picking up an instrument for the first time or looking to refine your technique, I'm here to guide you through your musical journey — including music theory and songwriting.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Book a Lesson</h2>
        <p className="text-gray-600 mb-4">Spots fill up quickly! Reserve your time today.</p>
        <Button className="text-lg px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg">
          Contact Me
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>&copy; {new Date().getFullYear()} Craig's Music Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
